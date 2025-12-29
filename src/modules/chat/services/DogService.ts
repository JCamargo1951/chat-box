// services/YesNoService.ts
import { useRequest } from '@/composables/useRequest'
import { ref } from 'vue'
import type { ChatApiService, ChatMessage, DogResponse } from '../interfaces'

export class DogService implements ChatApiService {
  canHandle(message: string): boolean {
    return message.includes('perrito')
  }

  async getResponse(): Promise<ChatMessage> {
    const { data, getData } = useRequest()
    const url = ref('https://dog.ceo/api/breeds/image/random')

    await getData(url)

    const { message } = data.value as DogResponse

    return {
      id: Date.now(),
      text: 'Un perrito',
      itsMine: false,
      image: message,
    }
  }
}
