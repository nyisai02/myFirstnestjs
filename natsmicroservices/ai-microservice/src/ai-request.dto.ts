export class AiRequestDto {
  prompt: string;
  systemPrompt?: string; // To define the AI's behavior/personality
  history?: { role: 'user' | 'assistant'; content: string }[];
}
