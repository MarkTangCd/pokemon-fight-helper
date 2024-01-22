enum Nature {
  Lonely, // 怕寂寞
  Adamant, // 固执
  Naughty, // 頑皮
  Brave, // 勇敢
  Bold, // 大胆
  Impish, // 淘气
  Lax, // 乐天
  Relaxed, // 悠闲
  Modest, // 內斂
  Mild, // 慢吞吞
  Rash, // 马虎
  Quiet, // 冷静
  Calm, // 溫和
  Gentle, // 温顺
  Careful, // 慎重
  Sassy, // 自大
  Timid, // 胆小
  Hasty, // 急躁
  Jolly, // 爽朗
  Naive, // 天真
}

enum Type {
  Normal, // 一般
  Fighting, // 格斗
  Flying, // 飞行
  Poison, // 毒
  Ground, // 地面
  Rock, // 岩石
  Bug, // 虫
  Ghost, // 幽灵
  Steel, // 铁
  Fire, // 火
  Water, // 水
  Grass, // 草
  Electric, // 电
  Psychic, // 超能
  Ice, // 冰
  Dragon, // 龙
  Dark, // 恶
  Fairy, // 妖精
}

enum DiamondType {
  Normal, // 一般
  Fighting, // 格斗
  Flying, // 飞行
  Poison, // 毒
  Ground, // 地面
  Rock, // 岩石
  Bug, // 虫
  Ghost, // 幽灵
  Steel, // 铁
  Fire, // 火
  Water, // 水
  Grass, // 草
  Electric, // 电
  Psychic, // 超能
  Ice, // 冰
  Dragon, // 龙
  Dark, // 恶
  Fairy, // 妖精
  Stellar, // 钛晶心晶
}

type Gender = "men" | "women";

interface Value {
  HP: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  speed: number;
}

type StriveValue = Value;

type RaceValue = Value;

interface Pokemon {
  ID: number;
  img: string;
  name: string;
  gender: Gender;
  type: Type[];
  diamondType: DiamondType;
  ability: string; // 特性
  tool: string;
  nature: Nature;
  realValue: Value;
  striveValue: Value;
  RaceValue: Value;
}
