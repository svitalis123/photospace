
import { ResourceType } from "@/types/types";
import { useQuery, useQueryClient } from "@tanstack/react-query"

interface MediaProps{
  initialresources: Array<ResourceType>
  tag: string
}

export function useResources(options?: MediaProps) {
  const queryClient = useQueryClient();
  const {data: resources} = useQuery({
    queryKey: ['media', options?.tag],
    queryFn: async () => {
      const {data} = await fetch('/api/resources').then(r => r.json())
      return data;
    },
    initialData: options?.initialresources
  })

  function addResources(results: Array<ResourceType>){
    queryClient.setQueryData(['media', String(process.env.NEXT_PUBLIC_CLOUDINARY_TAG_NAME)], (old: Array<ResourceType>) => {
      return [...results, ...old]
    })
    queryClient.invalidateQueries({queryKey: ['media', String(process.env.NEXT_PUBLIC_CLOUDINARY_TAG_NAME)]})
    console.log("results", results)
  }


  return {
    resources,
    addResources
  }
}