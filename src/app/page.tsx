import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>
          This example app will create the following error when you click on the `cjs` link below.
        </p>
        <p className="p-24 text-red-300">
          Module build failed: UnhandledSchemeError: Reading from "node:assert" is not handled by
          plugins (Unhandled scheme).
          <br />
          Webpack supports "data:" and "file:" URIs by default. You may need an additional plugin to
          handle "node:" URIs.
        </p>
        <div>
          <Link href={'cjs'} className="text-blue-400 underline">
            CJS module package does not work
          </Link>
        </div>
        <div>
          <Link href={'esm'} className="text-blue-400 underline">
            ESM Issue has similar issue when transpiled
          </Link>
        </div>
        <div>
          <Link href={'local'} className="text-blue-400 underline">
            The same code in `src` works fine
          </Link>
        </div>
      </div>
    </main>
  );
}
