import { useEffect, useState } from 'react';
import { useStore } from '@/context/stores';
import { getInvitationList } from '@/api/invitations/getInvitationList';
import { InvitationType } from '@/lib/types/invitations';

/**
 * 무한스크롤 로직에 맞춰 초대받은 데시보드 데이터 fetch해주는 커스텀훅
 */
export const useGetInvitationList = () => {
  const { search, setDashboardSearch, trigger } = useStore((state) => ({
    search: state.dashboardSearch,
    setDashboardSearch: state.setDashboardSearch,
    trigger: state.inviteTrigger,
  }));
  const [invitationList, setInvitationList] = useState<InvitationType[]>([]);
  const [cursorId, setCursorId] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    const searchResult = await getInvitationList(6, cursorId, search);
    if (!searchResult.cursorId || !searchResult) {
      setHasMore(false);
    }
    setCursorId(searchResult.cursorId);
    if (!cursorId) return setInvitationList(searchResult.invitations);
    setInvitationList((prev) => [...prev, ...searchResult.invitations]);
  };

  const fetchMore = () => {
    if (cursorId) return fetchData();
    setHasMore((prev) => !prev);
  };

  useEffect(() => {
    setHasMore(true);
    setCursorId(null);
    setInvitationList([]);
  }, [search, trigger]);

  useEffect(() => {
    if (!invitationList.length && hasMore) {
      fetchData();
    }
  }, [invitationList]);

  useEffect(() => {
    fetchData();
  }, []);

  return { fetchMore, hasMore, invitationList, search, setDashboardSearch };
};
