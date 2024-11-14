export default function () {
  onMounted(() => {
    const contentStyles = [].join(';');
    const linkStyles = ['text-decoration: underline'].join(';');

    console.groupCollapsed('Website Credits ✌️');
    // console.log('%cDesign: Designer %chttps//www.paullacour.com', contentStyles, linkStyles);
    console.log('%cDevelopment: Anna Erdelen %chttps://www.erdelen.com', contentStyles, linkStyles);
    console.groupEnd();
  });
}
