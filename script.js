document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const category = document.getElementById('issueCategory').value;
    const address = document.getElementById('address').value;
    const photoUpload = document.getElementById('photoUpload').files[0];

    // Handle the file upload and report submission logic here
    console.log(`Issue Category: ${category}`);
    console.log(`Address: ${address}`);
    console.log(`Uploaded Photo: ${photoUpload.name}`);

    // Optionally, you could send this data to your server or perform further actions
    alert('Report submitted successfully!');
});
