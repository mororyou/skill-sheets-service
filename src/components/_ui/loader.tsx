import '@/styles/loading.css';

export default function Loader() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="spinner">
        <div className="spinner1"></div>
      </div>
    </div>
  );
}
