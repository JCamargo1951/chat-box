// services/YesNoService.ts
import { useRequest } from '@/composables/useRequest'
import { ref } from 'vue'
import type { CatResponse, ChatApiService, ChatMessage } from '../interfaces'

export class CatService implements ChatApiService {
  canHandle(message: string): boolean {
    return message.includes('gatito')
  }

  async getResponse(): Promise<ChatMessage> {
    const { data, getData } = useRequest()
    const uri = ref('https://api.thecatapi.com/v1/images/search')

    await getData(uri)

    const { url } = data.value[0] as CatResponse

    return {
      id: Date.now(),
      text: 'Un gato',
      itsMine: false,
      image: url,
    }
  }
}
