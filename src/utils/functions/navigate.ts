export function navigateOptions(
  e: React.MouseEvent,
  id: number,
  navigate: string | any
) {
  e.preventDefault();
  e.stopPropagation();
  const itemData = JSON.parse(
    e.currentTarget.getAttribute("data-item") as string
  );
  navigate(
    `/options/${id}?id=${itemData.id}&name=${itemData.name}&price=${itemData.price}`,
    {
      state: { placeId: id },
    }
  );
}
