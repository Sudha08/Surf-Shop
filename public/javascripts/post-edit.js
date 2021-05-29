// find post edit form
let postEditForm = document.getElementById('postEditForm');
// add submit listener to postEditForm
postEditForm.addEventListener('submit', function(event) {
  // find the length of uploaded images
  let imgUploads = document.getElementById('imageUpload').files.length;
  // find the total amount of existing images
  let existingImgs = document.querySelectorAll('.imageDeleteCheckbox').length;
  // find total number of potential deletions
  let imgDeletions = document.querySelectorAll('.imageDeleteCheckbox:checked').length;
  // figure out if the form can be submitted or not
  let newTotal = existingImgs - imgDeletions + imgUploads;
  if ( newTotal > 4) {
    event.preventDefault();
    let removalAmt = newTotal - 4;
    alert(`You need to remove at least ${removalAmt} (more) image${removalAmt === 1 ? '' : 's'}`);
  }
});