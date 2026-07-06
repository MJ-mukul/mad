export const roleRank = {
  VISITOR: 0,
  MEMBER: 1,
  VOLUNTEER: 2,
  CORE_TEAM: 3,
  HEAD: 4,
  SECRETARY: 5,
  ADMIN: 6,
  SUPER_ADMIN: 7
} as const;

export type AppRole = keyof typeof roleRank;

export function canAccess(userRole: AppRole, minimumRole: AppRole) {
  return roleRank[userRole] >= roleRank[minimumRole];
}
