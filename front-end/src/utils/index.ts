export const formatedDate = (dateToFormated: Date | undefined) => {
  if (dateToFormated) {
    const date = new Date(dateToFormated)
    const formattedDate = date.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })

    return formattedDate
  }
}
