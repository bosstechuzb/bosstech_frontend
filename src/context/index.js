import LanguageProvider from "./lang";

const RootContext = ({ children }) => (
  <LanguageProvider>{children}</LanguageProvider>
);

export default RootContext;
