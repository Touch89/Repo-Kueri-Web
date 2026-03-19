import { useMemo, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

type ProductFormState = {
  name: string;
  description: string;
  price: string;
  stock: string;
  imageUrl: string;
  category: string;
};

type SubmitStatus = {
  kind: 'idle' | 'success' | 'error';
  message: string;
};

const INITIAL_FORM: ProductFormState = {
  name: '',
  description: '',
  price: '',
  stock: '',
  imageUrl: '',
  category: ''
};

export const AdminPage = () => {
  const [form, setForm] = useState<ProductFormState>(INITIAL_FORM);
  const [endpoint, setEndpoint] = useState('/api/products');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>({ kind: 'idle', message: '' });

  const canSubmit = useMemo(() => {
    return Boolean(
      form.name.trim() &&
      form.description.trim() &&
      form.price.trim() &&
      form.stock.trim() &&
      form.imageUrl.trim() &&
      endpoint.trim()
    );
  }, [endpoint, form.description, form.imageUrl, form.name, form.price, form.stock]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload = {
      name: form.name.trim(),
      description: form.description.trim(),
      price: Number(form.price),
      stock: Number(form.stock),
      imageUrl: form.imageUrl.trim(),
      category: form.category.trim() || null
    };

    if (Number.isNaN(payload.price) || Number.isNaN(payload.stock)) {
      setStatus({ kind: 'error', message: 'Precio y stock deben ser valores numericos.' });
      return;
    }

    setStatus({ kind: 'idle', message: '' });
    setIsSubmitting(true);

    try {
      const response = await fetch(endpoint.trim(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Error ${response.status} al crear producto`);
      }

      setForm(INITIAL_FORM);
      setStatus({ kind: 'success', message: 'Producto creado correctamente.' });
    } catch (error) {
      const message = error instanceof Error ? error.message : 'No se pudo crear el producto.';
      setStatus({ kind: 'error', message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="mx-auto w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <header className="mb-6 space-y-2">
        <h1 className="text-2xl font-bold text-slate-900">Panel Admin</h1>
        <p className="text-sm text-slate-600">
          Crea nuevos productos enviando un POST a tu API.
        </p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="endpoint" className="mb-1 block text-sm font-semibold text-slate-700">
            Endpoint de API
          </label>
          <input
            id="endpoint"
            name="endpoint"
            type="text"
            value={endpoint}
            onChange={(event) => setEndpoint(event.target.value)}
            placeholder="/api/products"
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-cyan-600"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-semibold text-slate-700">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-cyan-600"
            />
          </div>

          <div>
            <label htmlFor="category" className="mb-1 block text-sm font-semibold text-slate-700">
              Categoria (opcional)
            </label>
            <input
              id="category"
              name="category"
              type="text"
              value={form.category}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-cyan-600"
            />
          </div>

          <div>
            <label htmlFor="price" className="mb-1 block text-sm font-semibold text-slate-700">
              Precio
            </label>
            <input
              id="price"
              name="price"
              type="number"
              min="0"
              step="0.01"
              value={form.price}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-cyan-600"
            />
          </div>

          <div>
            <label htmlFor="stock" className="mb-1 block text-sm font-semibold text-slate-700">
              Stock
            </label>
            <input
              id="stock"
              name="stock"
              type="number"
              min="0"
              step="1"
              value={form.stock}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-cyan-600"
            />
          </div>
        </div>

        <div>
          <label htmlFor="imageUrl" className="mb-1 block text-sm font-semibold text-slate-700">
            URL de imagen
          </label>
          <input
            id="imageUrl"
            name="imageUrl"
            type="url"
            value={form.imageUrl}
            onChange={handleChange}
            required
            className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-cyan-600"
          />
        </div>

        <div>
          <label htmlFor="description" className="mb-1 block text-sm font-semibold text-slate-700">
            Descripcion
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            required
            className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-cyan-600"
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={!canSubmit || isSubmitting}
            className="rounded-lg bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-cyan-700 disabled:cursor-not-allowed disabled:bg-slate-400"
          >
            {isSubmitting ? 'Guardando...' : 'Crear producto'}
          </button>

          {status.kind !== 'idle' && (
            <p className={`text-sm ${status.kind === 'success' ? 'text-emerald-600' : 'text-red-600'}`}>
              {status.message}
            </p>
          )}
        </div>
      </form>
    </section>
  );
};