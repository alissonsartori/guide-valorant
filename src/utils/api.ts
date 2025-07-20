const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'https://valorant-api.com/v1';

export const apiEndpoints = {
  agents: `${API_BASE_URL}/agents`,
  weapons: `${API_BASE_URL}/weapons`,
  maps: `${API_BASE_URL}/maps`,
  sprays: `${API_BASE_URL}/sprays`,
  buddies: `${API_BASE_URL}/buddies`,
  bundles: `${API_BASE_URL}/bundles`,
  playerCards: `${API_BASE_URL}/playercards`,
  tiers: `${API_BASE_URL}/competitivetiers`,
} as const;

export const getAgentById = (id: string) => `${apiEndpoints.agents}/${id}`;
export const getWeaponById = (id: string) => `${apiEndpoints.weapons}/${id}`;
export const getMapById = (id: string) => `${apiEndpoints.maps}/${id}`;
export const getBundleById = (id: string) => `${apiEndpoints.bundles}/${id}`;

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public endpoint?: string
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const fetchFromApi = async <T>(endpoint: string): Promise<T> => {
  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw new ApiError(
        `API request failed: ${response.statusText}`,
        response.status,
        endpoint
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError(
      `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`,
      undefined,
      endpoint
    );
  }
};
