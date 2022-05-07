export type ConnectionTypes = "unknown" | "on" | "off";

interface PropTypes {
  type: ConnectionTypes;
}

function ConnectionStatus(props: PropTypes) {
  if (props.type === "unknown") {
    return null;
  }

  if (props.type === "off") {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="8" fill="#B62324" fillOpacity="0.6" />
        <circle cx="8" cy="8" r="6" fill="#B62324" />
      </svg>
    );
  }

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="8" fill="#3FB950" fillOpacity="0.6" />
      <circle cx="8" cy="8" r="6" fill="#3FB950" />
    </svg>
  );
}

export default ConnectionStatus;
