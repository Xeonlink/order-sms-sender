import useGlobalState from "./useGlobalState";

export default function usePage() {
  const [pages, setPages] = useGlobalState("pages", []);

  const openPage = (ui) => {
    const id = Date.now();
    setPages([
      ...pages,
      { ...ui, key: id, props: { ...ui.props, pageID: id } },
    ]);
  };

  const closePage = (pageID) => {
    setPages(pages.filter((page) => page.key * 1 !== pageID));
  };

  const setPage = (ui) => {
    const id = Date.now();
    setPages([{ ...ui, key: id, props: { ...ui.props, pageID: id } }]);
  };

  return { openPage, closePage, setPage };
}
