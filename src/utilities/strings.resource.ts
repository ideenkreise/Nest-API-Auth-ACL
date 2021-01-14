// For delete row(s) from DB
export function deleteString(entity: string, affected: number) {
  if (affected === 1) {
    return affected + ' ' + entity + ' Removed';
  } else if (affected > 1) {
    return affected + ' ' + entity + 's Removed';
  }
}

export const DOMAIN_PATH = '192.168.1.17';

export const PROFILE_IMAGE_PATH = 'uploads/profile';
export const FCM_IMAGE_PATH = 'uploads/FCM';
export const QUESTION_IMAGE_PATH = 'uploads/question';
export const HOME_BANNERS = 'uploads/banner';


export const GAIN = 'GAIN';
export const LOSS = 'LOSS';

// After END_TIME minutes the scheduled quiz status will update to 'ended'
export const END_TIME = 5;
