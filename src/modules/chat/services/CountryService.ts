// services/YesNoService.ts
import { useRequest } from '@/composables/useRequest'
import { ref } from 'vue'
import type { ChatApiService, ChatMessage, CountryResponse } from '../interfaces'

export class CountryService implements ChatApiService {
  canHandle(message: string): boolean {
    return message.includes('pais')
  }

  async getResponse(): Promise<ChatMessage> {
    const { data, getData } = useRequest()
    const uri = ref('https://restcountries.com/v3.1/name/mexico')

    await getData(uri)

    const { flags } = data.value[0] as CountryResponse

    return {
      id: Date.now(),
      text: 'Mexico',
      itsMine: false,
      image: flags.png,
    }
  }
}
