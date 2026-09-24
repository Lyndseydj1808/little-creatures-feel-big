import { useParams } from "react-router-dom";
import useChildAccounts from "./useChildAccounts";

export default function useCurrentChild() {
  const { childId } = useParams();
  const { childAccounts } = useChildAccounts();

  if (!childId) return null;
  return childAccounts.find((c) => c.childId === Number(childId)) || null;
}