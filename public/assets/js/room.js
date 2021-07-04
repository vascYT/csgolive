var socket = io();

var weapon_icons = {
  weapon_c75za:
    "http://vignette3.wikia.nocookie.net/cswikia/images/c/cf/C75a_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_deagle:
    "http://vignette2.wikia.nocookie.net/cswikia/images/7/7d/Deagle_hud_go.png/revision/latest/scale-to-width-down/400",
  weapon_elite:
    "http://vignette2.wikia.nocookie.net/cswikia/images/8/82/Elite_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_fiveseven:
    "http://vignette2.wikia.nocookie.net/cswikia/images/9/9c/Fiveseven_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_glock:
    "http://vignette2.wikia.nocookie.net/cswikia/images/3/33/Glock18_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_p250:
    "http://vignette2.wikia.nocookie.net/cswikia/images/5/57/P250_hud.png/revision/latest/scale-to-width-down/400",
  weapon_hkp2000:
    "http://vignette1.wikia.nocookie.net/cswikia/images/6/67/Hkp2000_hud.png/revision/latest/scale-to-width-down/400",
  weapon_tec9:
    "http://vignette3.wikia.nocookie.net/cswikia/images/5/55/Tec9_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_usp_silencer:
    "http://vignette2.wikia.nocookie.net/cswikia/images/7/73/Usps_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_mag7:
    "http://vignette2.wikia.nocookie.net/cswikia/images/2/2e/Mag7_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_revolver:
    "http://vignette2.wikia.nocookie.net/cswikia/images/7/7d/Deagle_hud_go.png/revision/latest/scale-to-width-down/400",
  weapon_nova:
    "http://vignette4.wikia.nocookie.net/cswikia/images/c/c8/Nova_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_sawedoff:
    "http://vignette1.wikia.nocookie.net/cswikia/images/9/94/Sawedoff_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_xm1014:
    "http://vignette2.wikia.nocookie.net/cswikia/images/a/ad/Xm1014_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_mac10:
    "http://vignette2.wikia.nocookie.net/cswikia/images/f/f7/Mac10_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_mp7:
    "http://vignette4.wikia.nocookie.net/cswikia/images/8/8d/Mp7_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_mp9:
    "http://vignette2.wikia.nocookie.net/cswikia/images/1/14/Mp9_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_p90:
    "http://vignette3.wikia.nocookie.net/cswikia/images/b/bd/P90_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_bizon:
    "http://vignette1.wikia.nocookie.net/cswikia/images/d/d5/Bizon_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_ump45:
    "http://vignette3.wikia.nocookie.net/cswikia/images/c/c4/Ump45_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_ak47:
    "http://vignette1.wikia.nocookie.net/cswikia/images/7/76/Ak47_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_aug:
    "http://vignette2.wikia.nocookie.net/cswikia/images/6/6f/Aug_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_famas:
    "http://vignette2.wikia.nocookie.net/cswikia/images/8/8f/Famas_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_galilar:
    "http://vignette1.wikia.nocookie.net/cswikia/images/4/4a/Galilar_hud.png/revision/latest/scale-to-width-down/400",
  weapon_m4a1_silencer:
    "http://vignette3.wikia.nocookie.net/cswikia/images/4/4f/M4a1s_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_m4a1:
    "http://vignette2.wikia.nocookie.net/cswikia/images/d/d9/M4a4_hud.png/revision/latest/scale-to-width-down/400",
  weapon_sg556:
    "http://vignette1.wikia.nocookie.net/cswikia/images/9/9b/Sg556_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_awp:
    "http://vignette3.wikia.nocookie.net/cswikia/images/e/eb/Awp_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_g3sg1:
    "http://vignette4.wikia.nocookie.net/cswikia/images/4/4a/G3sg1_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_ssg08:
    "http://vignette4.wikia.nocookie.net/cswikia/images/3/3c/Ssg08_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_scar20:
    "http://vignette4.wikia.nocookie.net/cswikia/images/c/c9/Scar20_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_m249:
    "http://vignette2.wikia.nocookie.net/cswikia/images/e/ea/M249_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_negev:
    "http://vignette2.wikia.nocookie.net/cswikia/images/b/be/Negev_hud.png/revision/latest/scale-to-width-down/400",

  weapon_c4:
    "http://vignette1.wikia.nocookie.net/cswikia/images/f/fc/C4_ticking_source.png/revision/latest/scale-to-width-down/400",
  weapon_hegrenade:
    "http://vignette1.wikia.nocookie.net/cswikia/images/6/60/Ammo_hegrenade_css.png/revision/latest/scale-to-width-down/400",
  weapon_molotov:
    "http://vignette3.wikia.nocookie.net/cswikia/images/f/fc/Molotov_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_flashbang:
    "http://vignette2.wikia.nocookie.net/cswikia/images/a/af/Flashbang_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_decoy:
    "http://vignette1.wikia.nocookie.net/cswikia/images/7/78/Decoy_hud.png/revision/latest/scale-to-width-down/400",
  weapon_smokegrenade:
    "http://vignette3.wikia.nocookie.net/cswikia/images/4/48/Smokegrenade_hud_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_incgrenade:
    "http://vignette2.wikia.nocookie.net/cswikia/images/4/45/Incgrenade_hud_csgo.png/revision/latest/scale-to-width-down/400",

  weapon_knife:
    "http://vignette2.wikia.nocookie.net/cswikia/images/4/4b/Knife_ct_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_knife_t:
    "http://vignette3.wikia.nocookie.net/cswikia/images/2/28/Knife_t_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_knife_bayonet:
    "http://vignette2.wikia.nocookie.net/cswikia/images/2/28/Csgo_knife_Bayonet.png/revision/latest/scale-to-width-down/400",
  weapon_knife_butterfly:
    "http://vignette2.wikia.nocookie.net/cswikia/images/d/df/Knife_butterfly_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_knife_falchion:
    "http://vignette4.wikia.nocookie.net/cswikia/images/7/7e/Falchion_Knife_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_knife_flip:
    "http://vignette3.wikia.nocookie.net/cswikia/images/a/a4/Knife_flip_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_knife_gut:
    "http://vignette2.wikia.nocookie.net/cswikia/images/f/ff/Knife_gut_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_knife_tactical:
    "http://vignette2.wikia.nocookie.net/cswikia/images/5/53/Knife_hustman_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_knife_karambit:
    "http://vignette4.wikia.nocookie.net/cswikia/images/5/57/Knife_karambit_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
  weapon_knife_m9_bayonet:
    "http://vignette4.wikia.nocookie.net/cswikia/images/d/d3/Csgo_knife_M9_Bayonet.png/revision/latest/scale-to-width-down/400",
  weapon_knife_shadow_dagger:
    "http://vignette4.wikia.nocookie.net/cswikia/images/f/f1/Knife_push_hud_outline_csgo.png/revision/latest/scale-to-width-down/400",
};

function set_innerhtml(text, id) {
  if (!text.includes("undefined")) {
    document.getElementById(id).innerHTML = text;
  } else {
    document.getElementById(id).innerHTML = "";
  }
}

function clear(ids) {
  for (var i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).innerHTML = "";
  }
}

function clear_imgs(ids) {
  for (var i = 0; i < ids.length; i++) {
    element = document.getElementById(ids[i]);
    if (element != null) {
      element.remove();
    }
  }
}

function add_img(src, id) {
  var img = document.createElement("img");
  img.src = src;
  img.id = id;
  document.querySelector(".weapons").appendChild(img);
}

socket.on("update", (json) => {
  2;
  if (document.getElementById("waiting-container"))
    document.getElementById("waiting-container").remove();

  // REMOVE OLD ELEMENTS to prevent old values from staying there
  clear(["health", "armor", "money", "phase"]); // Clears everything to prevent old values from staying there.
  clear_imgs([
    "weapon_0",
    "weapon_1",
    "weapon_2",
    "weapon_3",
    "weapon_4",
    "weapon_5",
    "weapon_6",
    "weapon_7",
    "weapon_8",
  ]); // Same with imgs
  //

  if (json.hasOwnProperty("map")) {
    // Standings
    set_innerhtml(String(json.map.team_ct.score), "ct_wins");
    set_innerhtml(String(json.map.team_t.score), "t_wins");
  }

  if (json.hasOwnProperty("player")) {
    set_innerhtml(json.player.name, "name");

    if (json.player.hasOwnProperty("state")) {
      set_innerhtml(String(json.player.state.health), "health");
      set_innerhtml(String(json.player.state.armor), "armor");
      set_innerhtml("$" + json.player.state.money, "money");

      effect_container = document.getElementById("effect_container");
      // Flashbang & Smoke
      flash_value = json.player.state.flashed;
      smoke_value = json.player.state.smoked;
      if (flash_value > 0) {
        effect_container.style.backgroundColor =
          "rgba(255, 255, 255, " + String(flash_value / 255) + ")";
      } else if (smoke_value > 0) {
        effect_container.style.backgroundColor =
          "rgba(79, 79, 79, " + String(smoke_value / 255) + ")";
      } else {
        effect_container.style.backgroundColor = null;
      }
    }

    // Weapons
    if (json.player.hasOwnProperty("weapons")) {
      weapons = json.player.weapons;

      for (var weapon_slot in weapons) {
        json_weapon = weapons[weapon_slot];
        add_img(weapon_icons[json_weapon.name], weapon_slot);

        if (json_weapon.state == "active") {
          document.getElementById(weapon_slot).style.backgroundColor =
            "rgba(0, 255, 0, 0.25)";
        } else if (json_weapon.state == "reloading") {
          document.getElementById(weapon_slot).style.backgroundColor =
            "rgba(255, 135, 0, 0.25)";
        } else {
          document.getElementById(weapon_slot).style.backgroundColor = null;
        }
      }
    }
  }

  if (json.hasOwnProperty("round")) {
    set_innerhtml(json.round.phase, "phase");
  }

  //document.getElementById("raw").innerHTML = JSON.stringify(json);
});
