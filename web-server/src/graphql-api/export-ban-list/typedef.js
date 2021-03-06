import ApolloServerKoa from 'apollo-server-koa';
const { gql } = ApolloServerKoa;

export default gql`
  """
  The ExportBanList type represents an export ban list, a way of exporting a list of banned players from the system.
  """
  type ExportBanList {
    """
    MongoDB Document ID
    """
    _id: String

    """
    The name of the export ban list.
    """
    name: String

    """
    The config / criteria of the export ban list.
    """
    config: String

    """
    The number of bans / unique SteamIDs listed within the export ban list.
    """
    banCount: Int

    """
    The SteamUser that owns the export ban list.
    """
    owner: SteamUser

    """
    The current status of the ban list's generation.

    Accessible to system admins only.
    """
    generatorStatus: String @systemAdminOnly

    """
    The current status of the associated BattleMetrics ban list.
    """
    battlemetricsStatus: String

    """
    An invite to the associated BattleMetrics ban list.
    """
    battlemetricsInvite: String

    """
    A list of export bans associated with the export ban list.
    """
    exportBans: [ExportBan]
  }
`;
