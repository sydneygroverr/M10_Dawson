﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Mission10_Dawson_backend.Data
{
    public class Bowler
    {
        [Key]
        [Required]
        public int BowlerID { get; set; }
        [ForeignKey("TeamID")]
        public int? TeamID { get; set; }
        public Team? Team { get; set; }
        public string? BowlerFirstName { get; set; }

        public string? BowlerLastName { get; set; }

        public string? BowlerMiddleInit { get; set; }
        public string? BowlerAddress { get; set; }
        public string? BowlerCity { get; set; }
        public string? BowlerState { get; set; }
        public int? BowlerZip { get; set; }
        public string? BowlerPhoneNumber { get; set; }

    }
}
