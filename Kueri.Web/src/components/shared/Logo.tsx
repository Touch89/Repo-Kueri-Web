export const Logo = () => {
  return (
    <>
      <p className="hidden lg:block">
        Kueri
        <span className="text-cyan-600">Mex</span>
      </p>

      <p className="flex text-4xl lg:hidden">
        <span className="-skew-x-6">K</span>
        <span className="text-cyan-600 skew-x-6">M</span>
      </p>
    </>
  );
}