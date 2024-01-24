export default function Tabs({ children, buttons, ButtonsContainer }) {
  return (
    <div>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </div>
  );
}
