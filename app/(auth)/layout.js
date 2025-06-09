export default function AuthLayout({ children }) {
  return (
    <main>
      <div className="container-max-width">
        {children}
      </div>
    </main>
  );
}
