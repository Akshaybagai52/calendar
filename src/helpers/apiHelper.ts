// helpers/apiHelpers.ts
let token=" eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJzYXRuYW1zaW5naDg1NjExQGdtYWlsLmNvbSIsImFwaV90b2tlbiI6Ims5MzBJbEVLcmpPRnhFemFxZ1I5Qk1UWE1CVlJad2QwQmNkQWVBUU5YV25Td3BRdnNGa3M1MGR0X0ZDdGxvOW9nMFEifSwiZXhwIjoxNzAxMjQ4ODMwfQ.sjyd5IMkUCRECB5g8K8mvHLquKKpb7hRUk0wxJLQNSs"
export const fetcher = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization:"Bearer" + `${token}`,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};
