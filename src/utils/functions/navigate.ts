export function navigateOptions(e: any, id: number, navigate: string | any) {
  e.preventDefault();
  e.stopPropagation();
  const itemData = JSON.parse(e.currentTarget.getAttribute("data-item"));
  navigate(
    `/options/${id}?id=${itemData.id}&name=${itemData.name}&price=${itemData.price}`,
    {
      state: { placeId: id },
    }
  );
}
