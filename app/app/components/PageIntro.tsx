export function PageIntro({
  number,
  eyebrow,
  title,
  description,
  duration,
}: {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  duration: string;
}) {
  return (
    <header className="pageIntro">
      <div className="pageNumber" aria-hidden="true">{number}</div>
      <div className="pageIntroCopy">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        <span className="timePill">About {duration}</span>
      </div>
    </header>
  );
}
