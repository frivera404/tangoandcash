const client = {
  appName: fillDefault(process.env.appName, "Tango & Cash"),
  appLogo: fillDefault(process.env.appLogo, "https://github.com/frivera404/tangoandcash/blob/main/public/favicon_32x32.png"),
  appThemeColor: fillDefault(process.env.appThemeColor, "#22c55e"),
  appSummary: fillDefault(process.env.appSummary, "Streamline agent management with our powerful app. Manage marketing tasks, lead generation, and API connections efficiently. Optimize workflows, monitor performance, and enhance productivity across all channels. Designed for agent supervisors, this app simplifies the complexities of agent management, enabling you to focus on growth."),
  exampleInput: fillDefault(process.env.exampleInput, "Manage lead generation and marketing tasks effectively with our app. Optimize workflows, handle API connections, and monitor agent performance to boost productivity.")
};

export default client;

function fillDefault(value: string | undefined, defaultValue: string): string {
  return !value ? defaultValue : value;
}
