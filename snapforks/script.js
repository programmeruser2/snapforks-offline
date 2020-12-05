;(function () {
let username, project, url;
const errElem = document.getElementById('err-msg'); 
document.getElementById('submitBtn').addEventListener('click', async function () {
  project = encodeURIComponent(document.getElementById('txt1').value);
  username = encodeURIComponent(document.getElementById('txt2').value);
  if(!project || !username) {
    error('That project does not exist');
    return;
  }
  const req = await fetch(`https://snap.berkeley.edu/projects/${username}/${project}`);
  if (req.ok) 
    loadProject();
  else if (req.status === 404) 
    error('That project does not exist');
  else 
    error('Error ' + req.status + ' while fetching project');
});
function error(msg) {
  errElem.style.display = 'inline-block';
  errElem.innerText = msg;
}
function loadProject() {
  errElem.style.display = 'none';
  url=`https://snap.berkeley.edu/embed?project=${project}&user=${username}&showTitle=true&showAuthor=true&editButton=true&pauseButton=true`;
  document.getElementById('if').src = url;
  document.getElementById('code').value = url;
}
})();
