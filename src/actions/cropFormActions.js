export const updateCropFormData = cropFormData => {
   return {
      type: 'UPDATED_DATA',
      cropFormData
   }
}

export const resetCropForm = () => {
   return {
      type: 'RESET_CROP_FORM'
   }
}