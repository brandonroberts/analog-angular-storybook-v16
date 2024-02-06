import { provideAnimations } from "@angular/platform-browser/animations";
import { applicationConfig, type Preview } from "@storybook/angular/dist/client";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    applicationConfig({
      providers: [provideAnimations()],
    }),
  ],  
};

export default preview;
