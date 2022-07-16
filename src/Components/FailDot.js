function FailDot() {
  return (
    <span
      className="redDot"
      style={{
        transform: `translate(${0.55 + 1.42 * 2 + 1 * 1}vmin, ${-0.5}vmin)`,
      }}
    ></span>
  );
}

export { FailDot };
