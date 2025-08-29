
export const normalizeQueryToken = (token:string) => {
  const m: Record<string,string[]> = {
    'sonido':['audio','sound'],
    'audio':['audio','sound'],
    'iluminacion':['lighting','lights'],
    'iluminación':['lighting','lights'],
    'video':['video','av'],
    'backline':['instrument-rental','instruments'],
    'tarimas':['staging','risers']
  };
  const k = token.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu,'');
  return m[k] || [k];
};
