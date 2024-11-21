export default function () {
  onMounted(() => {
    const contentStyles = [].join(';');
    const linkStyles = ['text-decoration: underline'].join(';');

    console.groupCollapsed('Website Credits ✌️');
    //TODO console.log('%cDesign: Designer %chttps//www.website.com', contentStyles, linkStyles);
    console.log('%cDevelopment: Anna Erdelen %chttps://www.erdelen.com', contentStyles, linkStyles);
    console.groupEnd();
  });
}
