const currentYear = new Date().getFullYear();
document.getElementById('currentYear').innerText = currentYear;

const lastModified = document.lastModified;
document.getElementById('lastmodified').innerText = `Last modified: ${lastModified}`;
