import { Toggle } from "./Toggle";
import { Wrapper } from "./Wrapper";
import { Navigation } from "./Navigation";

export const Sidebar = () => {
  return (
    <Wrapper>
      <Toggle />
      <Navigation />
    </Wrapper>
  );
};