export function AllColors(card: any) {
    if (card["model-products"] && card["model-products"].length > 0) {
        const colors: string[] = [];
        card["model-products"].forEach((e: any) => {
            colors.push(e.color)
        })
        return colors
    }
   return 
}
