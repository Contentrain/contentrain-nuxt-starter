export function splitAssetLink(link:string): any {
    if(link.startsWith("public")){
        return link.split('public')[1]
    } else {
        return link
    }
  }