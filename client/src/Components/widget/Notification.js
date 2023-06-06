export function TextWithLimit({ text, limit }) {
  return (
    <div>
      {text.length <= limit ? (
        <span>{text}</span>
      ) : (
        <span id="that_text">
          {text.slice(0, limit)}&hellip;
        </span>
      )}
    </div>
  );
}