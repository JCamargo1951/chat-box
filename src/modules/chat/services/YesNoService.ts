// services/YesNoService.ts
import { useRequest } from '@/composables/useRequest'
import { ref } from 'vue'
import type { ChatApiService, ChatMessage, YesNoResponse } from '../interfaces'

export class YesNoService implements ChatApiService {
  canHandle(message: string): boolean {
    return message.endsWith('?')
  }

  async getResponse(): Promise<ChatMessage> {
    const { data, getData } = useRequest()
    const url = ref('https://yesno.wtf/api')

    await getData(url)

    const { answer, image } = data.value as YesNoResponse

    return {
      id: Date.now(),
      text: answer,
      itsMine: false,
      image,
    }
  }
}
