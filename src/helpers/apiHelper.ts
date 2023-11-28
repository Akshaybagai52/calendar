// helpers/apiHelpers.ts

export const fetcher = async <T>(url: string): Promise<T> => {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      return await response.json();
    } catch (error:any) {
      throw new Error(`Error fetching data: ${error.message}`);
    }
  };
  

  