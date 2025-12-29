import { ref, type Ref } from "vue"

type useRequest = () => {
    getData: (url: Ref<string>) => Promise<void>
    data: Object,
    loading: Ref<boolean>
    error: Ref<string>
}

const loading = ref(false);
const error = ref('');

export function useRequest() {
  
  const data = ref<any>(null);

  const getData = async (url: Ref<string>) => {

    loading.value = true;
    try {
      const response = await fetch(url.value);
      data.value = await response.json();
    } catch (e) {
      error.value = 'No se pudo realizar la peticion...';
    } finally {
      loading.value = false;
    }
    
  }
  
  return { data, getData, loading, error }
}