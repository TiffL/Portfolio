// credits: transition effect based on christopher aue's fading pages tutorial
startTransition();

function startTransition() {
  if (!window.AnimationEvent) return;
  document.getElementById('fade-screen').setAttribute('class', 'fade-out');
}

document.addEventListener('DOMContentLoaded', function() {
  if (!window.AnimationEvent) return;
  let links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    if (links[i].hostname === window.location.hostname) {
        links[i].addEventListener('click', function(e) {
          let fadeScreen = document.getElementById('fade-screen');
          let link = e.currentTarget;

          let fadeEffect = function() {
            window.location = link.href;
            fadeScreen.removeEventListener('animationend', fadeEffect);
          };
          fadeScreen.addEventListener('animationend', fadeEffect);

          e.preventDefault();
          fadeScreen.setAttribute('class', 'fade-in');
        });
    }
  }
});

window.addEventListener('pageshow', function (e) {
  if (!e.persisted) return;
  let fadeScreen = document.getElementById('fade-screen');
  fadeScreen.removeAttribute('class', 'fade-in');
  fadeScreen.setAttribute('class', 'fade-out');
});
