import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AiRequestDto } from './ai-request.dto';

@Injectable()
export class AiService {
  private readonly OLLAMA_URL = 'http://ollama:11434/api/generate';
  private readonly MODEL = 'llama3';

  async processData(data: AiRequestDto): Promise<string> {
    try {
      // Build a conversation history string for context
      const historyContext = data.history 
        ? data.history.map(h => `${h.role}: ${h.content}`).join('\n') 
        : '';
      
      const prompt = `${data.systemPrompt || 'You are a helpful AI assistant.'}\n\n${historyContext}\nUser: ${data.prompt}`;

      const response = await axios.post(this.OLLAMA_URL, {
        model: this.MODEL,
        prompt: prompt,
        stream: false,
      });
      return response.data.response;
    } catch (error) {
      console.error('LLM Inference Error:', error.message);
      return 'Error: Could not connect to local LLM.';
    }
  }
}
