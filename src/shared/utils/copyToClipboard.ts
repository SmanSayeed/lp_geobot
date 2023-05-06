
    async function copyTextToClipboard(text:string) {
      if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
      } else {
        return document.execCommand('copy', true, text);
      }
    }
  
    // onClick handler function for the copy button
    export const handleCopyClick = (copyText:string):boolean => {
      
      // Asynchronously call copyTextToClipboard
      copyTextToClipboard(copyText)
        .then(() => {
          // If successful, update the isCopied state value
        //   setIsCopied(true); 
          return true
          setTimeout(() => {
            // setIsCopied(false);
            return false
          }, 1500);
        })
        .catch((err) => {
          console.log(err);
        });
        return false
    
    }