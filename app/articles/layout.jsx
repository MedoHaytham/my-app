
export const metadata = {
  title : 'Articles Page',
}

export default function ArticlesLayout({children}) {
  return(
    <div>
      <h1>Articles</h1>
      <div className="mt-12.5 bg-blue-700 p-5 rounded-[10px]">
        {children}
      </div>
    </div>
  );
}