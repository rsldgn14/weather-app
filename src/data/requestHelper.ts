// Hata tipi (her türlü API hatası için kullanılabilir)
interface ApiError<E = unknown> {
  message: string;
  statusCode: number;
  errorDetails?: E; // Ek hata detayları opsiyonel
}

// API yanıt tipi
interface ApiResponse<T, E = unknown> {
  status: number;
  body: T | null; // API cevabı (başarılı ise body, değilse null)
  error: ApiError<E> | null; // API hatası (başarısızsa error, değilse null)
}

// Genel fetch fonksiyonu
export async function request<T, E = unknown>(
  url: string
): Promise<ApiResponse<T, E>> {
  try {
    const response = await fetch(url);

    // Eğer cevap başarısızsa
    if (!response.ok) {
      const error: ApiError<E> = {
        message: "API isteği başarısız oldu",
        statusCode: response.status,
      };

      return {
        status: response.status,
        body: null,
        error,
      };
    }

    // Başarılı durumda JSON verisini döndür
    const data: T = await response.json();
    return {
      status: response.status,
      body: data,
      error: null,
    };
  } catch (error) {
    // Fetch sırasında bir hata oluşursa
    const apiError: ApiError<E> = {
      message: "İstek sırasında bir hata oluştu",
      statusCode: 500,
    };

    return {
      status: 500,
      body: null,
      error: apiError,
    };
  }
}
