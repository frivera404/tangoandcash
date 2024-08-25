const server = {
  openAIAPIKey: required(process.env.OPENAI_API_KEY, "asst_XZqf46Wxz4XL9pI7VHraZQEi"),
  openAIAPIBaseURL: fillDefault(
    process.env.OPENAI_API_BASE_URL,
    "https://api.openai.com/v1/assistants"
  ),
  systemMessage: optional(process.env.SYSTEM_MESSAGE),
  messageTemplate: optional(process.env.MESSAGE_TEMPLATE),
};

export default server;

function fillDefault(value: string | undefined, defaultValue: string): string {
  return !value ? defaultValue : value;
}

function required(value: string | undefined, name: string): string {
  if (!value) {
    throw Error(`The environment ${name} is required but not found.`);
  }

  return value;
}

function optional(value: string | undefined): string | undefined {
  return value ? value : undefined;
}
