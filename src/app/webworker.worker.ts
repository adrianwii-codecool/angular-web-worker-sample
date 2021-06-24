/// <reference lib="webworker" />

function getData(url: string): Promise<any> {
  return new Promise(((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = () => {
      xhr.status === 200 ? resolve(xhr.response) : reject();
    };
    xhr.send();
  }));
}

addEventListener('message', async ({data}) => {
  const response = await getData(data);
  postMessage(response);
});
