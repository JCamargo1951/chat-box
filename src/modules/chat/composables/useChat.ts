import { sleep } from '@/helpers/sleep'
import { chatServices } from '@/modules/chat/services/ChatServices'
import { ref } from 'vue'
import type { ChatMessage } from '../interfaces'

const typing = ref(false);

export const useChat = () => {

  const messages = ref<ChatMessage[]>([
    {
      id: new Date().getTime() + 1,
      text: 'Palabras magicas: "pais", "?", "gatito" y "perrito".',
      itsMine: false,
      image: 'https://yesno.wtf/assets/yes/7-653c8ee5d3a6bbafd759142c9c18d76c.gif',
    },
  ])

  const onMessage = async (text: string) => {
    if (text.length === 0) return

    messages.value.push({
      id: new Date().getTime(),
      text: text,
      itsMine: true,
    })

    const service = chatServices.find((s) => s.canHandle(text));

    if (!service) return    

    try {
      typing.value = true;
      const response = await service.getResponse();
      await sleep(1)
      messages.value.push(response);
    } catch (error) {
      console.log(error);
      messages.value.push({
        id: new Date().getTime(),
        text: 'Ups... no tengo una respuesta para eso.',
        itsMine: false,
      });
    }finally{
      typing.value = false;
    }
  }

  return {
    messages,
    onMessage,
    typing,
  }
}
